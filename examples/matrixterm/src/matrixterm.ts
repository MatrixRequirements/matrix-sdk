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
    public project?: string;
    public childrenIds: string[];
    public childrenNames: string[];

    private reset() {
        this.project = undefined;
        this.childrenIds = [];
        this.childrenNames = [];
    }

    constructor() {
        this.reset();
    }

    private async initFromPath(fullpath: string, mmapi) {
        const parts: string[] = fullpath.split('/');
        this.project = undefined;
        if (parts.length > 1) {
            const maybeProject = parts[1];
            const projects: string[] = await mmapi.getProjects();
            if (projects.filter(p => p == maybeProject).length != 1) {
                throw new Error('invalid project name');
            }
            this.project = maybeProject;
            this.childrenNames = [];
            this.childrenIds = [];
            await mmapi.setProject(this.project);
            for (const p of parts.slice(2)) {
                // is p a valid child in the current directory?
                let titleAndIds: matrixApi.ITitleAndId[];
                if (this.topId()) {
                    titleAndIds = await mmapi.getFolderChildren(this.topId());
                } else {
                    titleAndIds = await mmapi.getTree();
                }
                const filteredItems = titleAndIds.filter((v: matrixApi.ITitleAndId) => v.title == p);
                if (filteredItems.length === 0) {
                    this.reset();
                    throw new Error(`${p} is not a valid folder`);
                }
                // Make sure it's a folder.
                if (!filteredItems[0].isFolder) {
                    this.reset();
                    throw new Error(`${p} is not a valid folder`);
                }
                this.childrenNames.push(filteredItems[0].title);
                this.childrenIds.push(filteredItems[0].id);
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
                    if (that.childrenNames.length == 0) {
                        if (that.project) {
                            that.project = undefined;
                            await mmapi.setProject(undefined);
                        } else {
                            this.reset();
                            throw new Error('Invalid path');
                        }
                    } else {
                        that.childrenNames.pop();
                        that.childrenIds.pop();
                    }
                } else {
                    if (that.project == undefined) {
                        // First part of the path is a project name.
                        that.project = p;
                        await mmapi.setProject(p);
                        return;
                    }
                    if (that.childrenIds.length === 0) {
                        // The first directories.
                        const folders: matrixApi.ITitleAndId[] = await mmapi.getTree();
                        // Verify that {p} is in this list.
                        const filteredFolders = folders.filter(v => v.title == p);
                        if (filteredFolders.length < 1) {
                            that.reset();
                            throw new Error(`${p} is not a valid folder in ${that.project}`);
                        }
                        that.childrenNames.push(filteredFolders[0].title);
                        that.childrenIds.push(filteredFolders[0].id);
                        return;
                    }
                    // Does the current directory have this folder?
                    const titleAndIds: matrixApi.ITitleAndId[] = await mmapi.getFolderChildren(that.topId());
                    const filteredItems = titleAndIds.filter((v: matrixApi.ITitleAndId) => v.title == p);
                    if (filteredItems.length === 0) {
                        this.reset();
                        throw new Error(`${p} is not a valid folder`);
                    }
                    // Make sure it's a folder.
                    if (!filteredItems[0].isFolder) {
                        this.reset();
                        throw new Error(`${p} is not a valid folder`);
                    }
                    this.childrenNames.push(filteredItems[0].title);
                    this.childrenIds.push(filteredItems[0].id);
                }
            }
        }
    }

    public pop() {
        if (this.childrenNames.length > 0) {
            this.childrenNames.pop();
            this.childrenIds.pop();
        }
    }

    public topName(): string {
        if (this.childrenNames.length > 0) {
            return this.childrenNames[this.childrenNames.length - 1];
        } else if (this.project) {
            return this.project;
        }
        return undefined;
    }

    public topId(): string {
        if (this.childrenIds.length > 0) {
            return this.childrenIds[this.childrenIds.length - 1];
        }
        return undefined;
    }

    public getFullPath(): string {
        let result: string = "/";
        if (this.project) {
            result += this.project;
            this.childrenNames.forEach(n => { result += ('/' + n); });
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
    } else if (currentDir.childrenIds.length == 0) {
        const folders: matrixApi.ITitleAndId[] = await mmapi.getTree();
        folders.forEach((f: matrixApi.ITitleAndId) => {
            print((f.isFolder ? '> ' : '') + f.title);
        });
    } else {
        const children: matrixApi.ITitleAndId[] = await mmapi.getFolderChildren(currentDir.topId());
        children.forEach(child => {
            print((child.isFolder ? '> ' : '') + child.title);
        });
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
            print("Sorry, no special info");
        }
    } else if (currentDir.childrenIds.length == 0) {
        const folders: matrixApi.ITitleAndId[] = await mmapi.getTree();
        const filteredFolders = folders.filter((p) => p.title == args);
        if (filteredFolders.length < 1) {
            print(`Sorry, folder ${args} not found`);
        } else {
            // Get and display the item.
            itemId = filteredFolders[0].id;
        }
    } else {
        const children: matrixApi.ITitleAndId[] = await mmapi.getFolderChildren(currentDir.topId());
        const filteredFolders = children.filter((p) => p.title == args);
        if (filteredFolders.length < 1) {
            print(`Sorry, folder ${args} not found`);
        } else {
            // Get and display the item.
            itemId = filteredFolders[0].id;
        }
    }
    if (itemId) {
        // Get the item
        const item: matrixApi.IItem = await mmapi.getItem(itemId);
        console.dir(item, { depth: null, colors: true });
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
    } else if (currentDir.childrenIds.length == 0) {
        const folders: matrixApi.ITitleAndId[] = await mmapi.getTree();
        const completions = folders.map((v) => v.title);
        const hits = completions.filter((c) => c.startsWith(line));
        callback(null, [hits.length ? hits : completions, line]);
        return;
    }

    const children: matrixApi.ITitleAndId[] = await mmapi.getFolderChildren(currentDir.topId());
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