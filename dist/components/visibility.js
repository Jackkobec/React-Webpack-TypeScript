export function visibility(code) {
    if (sessionStorage['visibility']) {
        let privileges = JSON.parse(sessionStorage['visibility']);
        let index = privileges.indexOf(code);
        return (index >= 0 || code === '*');
    }
    else {
        return false;
    }
}
//# sourceMappingURL=visibility.js.map