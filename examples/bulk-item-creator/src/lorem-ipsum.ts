export { textGenerator };

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function textGenerator(paragraphCount?: number) {
    if (!paragraphCount) {
        paragraphCount = 1;
    }

    let output = "";
    for (let i = 0; i < paragraphCount; i++) {
        output += text;
        output += "\n";
    }

    return output;
}