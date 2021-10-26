const properties = [
    "archived",
    "clone_url",
    "created_at",
    "default_branch",
    "language",
    "name",
    "description",
    "html_url"
]

class Repo {
    type = "REPO";

    constructor (rawData) {
        for (let property of properties) {
            this[property] = rawData[property];
        }

        this.tree = this.name.split("-");
        this.archive_url = rawData.archive_url.replaceAll(/{.+}/g, "") + "zipball";
    }
}

export default Repo;