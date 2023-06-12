/// <reference types="matrixrequirements-type-declarations" />
/// <reference types="matrix-requirements-api" />
import readline from 'readline';
// import { exit } from "process";
import { Command } from 'commander';
require('node-self');
let matrix = require('matrix-requirements-api');
export {};

// let token = "Token api_6k95hig76a2u4mdkn2vr5i15jo.v6dm6rrukfe929c5ujjsg6pe5t";

// Commands:
//   -- ls
//   -- cd
//   -- cat
//   -- find (?)
class Directory {
    // public project?: string;
    public project: matrixApi.Project;
    public currentFolder: matrixApi.TreeFolder;

    private reset() {
        this.project = undefined;
        this.currentFolder = undefined;
    }

    constructor() {
        this.reset();
    }

    private async initFromPath(fullpath: string, mmapi) {
        const parts: string[] = fullpath.split('/');
        this.reset();
        if (parts.length > 1) {
            const maybeProject = parts[1];
            if (maybeProject.length > 0) {
                const projects: string[] = await mmapi.getProjects();
                if (projects.filter(p => p == maybeProject).length != 1) {
                    throw new Error('invalid project name');
                }
                this.project = await mmapi.openProject(maybeProject);
                this.currentFolder = await this.project.getProjectTree();
                // is p a valid child in the current directory?
                for (const p of parts.slice(2)) {
                    if (p == '..' && this.currentFolder) {
                        if (!this.currentFolder.isRoot()) {
                            this.currentFolder = this.currentFolder.getParent();
                        } else {
                            this.currentFolder = undefined;
                            this.project = undefined;
                        }
                    } else {
                        this.currentFolder = this.currentFolder.findDirectFolderByTitle(p);
                        if (this.currentFolder == null) {
                            this.reset();
                            throw new Error(`${p} is not a valid folder`);
                        }
                    }
                }
            }
        }
    }

    public async cd(path: string, mmapi: matrixApi.StandaloneMatrixAPI) {
        if (path[0] === '/') {
            // absolute path
            await this.initFromPath(path, mmapi);
            return this;
        } else {
            // relative path.
            const parts: string[] = path.split('/');
            let that = this;
            for (const i in parts) {
                const p: string = parts[i];
                if (p === '..') {
                    if (that.currentFolder) {
                        if (that.currentFolder.isRoot()) {
                    // TODO: isn't this the same as reset()?
                            that.project = undefined;
                            that.currentFolder = undefined;
                        } else {
                            that.currentFolder = that.currentFolder.getParent();
                        }
                    }
                } else {
                    if (that.project == undefined) {
                        // First part of the path is a project name.
                        that.project = await mmapi.openProject(p);
                        that.currentFolder = await that.project.getProjectTree();
                    } else {
                        // Does the current directory have this folder?
                        if (that.currentFolder.findDirectFolderByTitle(p) == null) {
                            this.reset();
                            throw new Error(`${p} is not a valid folder in ${that.project.getName()}`);
                        }
                        that.currentFolder = that.currentFolder.findDirectFolderByTitle(p);
                    }
                }
            }
        }
    }

    public pop() {
        if (!this.currentFolder.isRoot()) {
            this.currentFolder = this.currentFolder.getParent();
        }
    }

    public topName(): string {
        if (this.currentFolder) {
            return this.currentFolder.getTitle();
        }
        return undefined;
    }

    /**
     * If the current folder is the leaf folder. 
     * @returns 
     */
    public topId(): string {
        if (this.currentFolder) {
            return this.currentFolder.getId();
        }
        return undefined;
    }

    public getFullPath(): string {
        let result: string = "/";
        if (this.project) {
            result += this.project.getName();
            result += this.currentFolder.getPath();
        }
        return result;
    }

    public hasFolder(): boolean {
        return this.project != undefined;
    }
}

let currentDir: Directory = new Directory();

function print(x) {
    console.log(x);
}

async function handleLs(args: string) {
    if (!currentDir.hasFolder()) {
        // list projects.
        const projects: string[] = await mmapi.getProjects();
        projects.forEach(p => {
            print('> ' + p);
        });
    } else {
        const children: matrixApi.ITitleAndId[] = currentDir.currentFolder.getAllChildren();
        children.forEach(child => {
            print((child.isFolder ? '> ' : '') + child.title);
        });
    }
}

function catProject(project: matrixApi.Project) {
    const config = project.getItemConfig();
    const cats = config.getCategories();
    print(`Project ${project.getName()} contains ${cats.length} categories:`);
    for (let cat of cats) {
        const fields = config.getFields(cat);
        const fieldStrings = fields.map(f => `${f.label}(${f.fieldType})`);
        print(`${cat} with fields:`);
        for (let field of fieldStrings) {
            print(`    ${field}`);
        }
    }
}

async function handleCat(args: string) {
    // cat <Item Name>
    if (args.trim() == "") return;
    let itemId;
    if (!currentDir.hasFolder()) {
        // User wants info on one of the projects.
        const projects: string[] = await mmapi.getProjects();
        const filteredProjects = projects.filter((p) => p == args);
        if (filteredProjects.length < 1) {
            print(`Sorry project ${args} not found`);
        } else {
            catProject(await mmapi.openProject(args));
        }
    } else {
        const children: matrixApi.ITitleAndId[] = await currentDir.currentFolder.getAllChildren();
        const filteredFolders = children.filter((p) => p.title == args);
        if (filteredFolders.length < 1) {
            print(`Sorry, item ${args} not found`);
        } else {
            // Get and display the item.
            itemId = filteredFolders[0].id;
        }
    }
    if (itemId) {
        // Get the item
        const item: matrixApi.Item = await currentDir.project.getItem(itemId);
        const iitem = item.extractData();
        console.dir(iitem, { depth: null, colors: true });
        // print(JSON.stringify(item));
    }
}
async function handleCd(args: string) {
    // Is args empty? --> print current directory
    // Is args beginning with "/"? --> then it's an absolute path. Go there.
    // Args beginning with anything else? --> relative path.
    if (args == "") {
        print(currentDir.getFullPath());
    } else {
        // try to change directories.
        const oldpath: string = currentDir.getFullPath();
        try {
            await currentDir.cd(args, mmapi);
            rl.setPrompt(`${currentDir.getFullPath()} > `);
        } catch (e) {
            print('an error occurred');
            currentDir = new Directory();
            await currentDir.cd(oldpath, mmapi);
            rl.setPrompt(`${currentDir.getFullPath()} > `);
        }
    }
}

async function processCommand(args) {
    let arrayArgs = args.split(' ');
    if (arrayArgs.length >= 1) {
        let cmdString = arrayArgs[0];
        const cmdArgs = arrayArgs.slice(1).join(' ');
        if (cmdString == 'ls') {
            await handleLs(cmdArgs);
        } else if (cmdString == 'cd') {
            await handleCd(cmdArgs);
        } else if (cmdString == 'cat') {
            await handleCat(cmdArgs);
        } else if (cmdString == 'exit') {
            return false;
        }
    }
    return true;
}

function processKey(key: string): string { return "Token " + key; }
async function completer(line, callback) {
    // Remove the command.
    const splits = line.split(' ');
    if (splits.length > 1) {
        line = splits.slice(1).join(' ');
    }
    // Get the current directory contents.
    if (!currentDir.hasFolder()) {
        // list projects.
        const projects: string[] = await mmapi.getProjects();
        const hits = projects.filter((c) => c.startsWith(line));
        callback(null, [hits.length ? hits : projects, line]);
        return;
    }

    const children: matrixApi.ITitleAndId[] = currentDir.currentFolder.getAllChildren();
    const completions = children.map((v) => v.title);
    const hits = completions.filter((c) => c.startsWith(line));
    callback(null, [hits.length ? hits : completions, line]);
}

var rl = readline.createInterface(process.stdin, process.stdout, completer);
const default_key = "api_6k95hig76a2u4mdkn2vr5i15jo.v6dm6rrukfe929c5ujjsg6pe5t";
let token = processKey(default_key);
const server = "http://localhost:8080";
const restUrl = server + "/rest/1";
let mmapi = matrix.CreateConsoleAPI(token, restUrl, server);  // new MMAPI(config, server);

function main() {
    rl.setPrompt(`/ > `);
    rl.prompt();
    rl.on('line', async (args) => {
        const result = await processCommand(args);
        if (result) {
            rl.prompt();
        } else {
            rl.close();
        }
    });
}

main();