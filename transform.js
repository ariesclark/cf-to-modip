const curse = require("./curseproxy");

module.exports = async function transform (id) {
    let addon = await curse(`addon/${id}`);
    let files = await curse(`addon/${id}/files`);
    let description = await curse(`addon/${id}/description`, true);
    
    return {
        "schemaVersion": "1.0.0",
        "id": addon.slug,
        "name": addon.name,
        "summary": addon.summary,
        "description": description,
        "media": addon.attachments.map(attachment => {
            return {
                "rel": attachment.isDefault ? "icon" : "gallery",
                "type": "image",
                "src": attachment.url,
                "caption": attachment.description ? attachment.description : attachment.title
            }
        }),
        "authors": addon.authors.map(author => {
            return {
                "name": author.name,
                "id": author.userId,
                "url": author.url
            }
        }),
        "tags": [
            "mod"
        ],
        "license": {
            "id": "custom",
            "name": "Custom License",
            "url": `https://curseforge.com/project/${id}/license`
        },
        "links": [
            {
                "rel": "homepage",
                "name": "CurseForge",
                "url": addon.websiteUrl
            }
        ],
        "versions": files.map(file => {
            return {
                "id": file.id,
                "name": file.displayName,
                "releaseDate": new Date(file.fileDate).toISOString(),
                "changelog": "N/A",
                "game": {
                    "versions": file.gameVersion.filter(version => version.includes("."))
                }
            }
        }),
        "files": files.map(file => {
            return {
                "name": file.fileName,
                "rel": "primary",
                "dependencies": [],
                "downloads": [
                    file.downloadUrl
                ]
            }
        })
    }
}