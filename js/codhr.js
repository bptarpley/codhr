function makeCoDHRProjectCards() {
    let html = ''

    forEachKey(CoDHRProjects, projectID => {
        let project = CoDHRProjects[projectID]
        let projectPeople = []

        project.people.forEach(person => {
            projectPeople.push(CoDHRTemplates.projectPI({
                name: `${person.name} (${person.dept})`,
                link: person.link,
            }))
        })

        html += CoDHRTemplates.project({
            people: projectPeople,
            id: projectID,
            name: project.name,
            desc: project.desc,
            image: project.image,
            link: project.link
        })
    })

    return html
}

function makeCoDHRFeaturedProjectList() {
    let html = ''
    let projectIDs = getRandomKeys(CoDHRProjects)

    projectIDs.forEach(projectID => {
        let project = CoDHRProjects[projectID]

        html += CoDHRTemplates.featuredProject({
            id: projectID,
            name: project.name,
            image: project.image,
            link: project.link,
            desc: project.desc,
        })
    })

    return html
}

function makeCollaboratorList() {
    let html = ''
    let collaborators = {}

    forEachKey(CoDHRProjects, projectID => {
        let project = CoDHRProjects[projectID]
        project.people.forEach(person => {
            if (!(person.id in collaborators)) {
                collaborators[person.id] = person
                collaborators[person.id].projects = []
            }

            collaborators[person.id].projects.push(projectID)
        })
    })

    let sortedCollaboratorKeys = sortKeysByLastName(collaborators)

    sortedCollaboratorKeys.forEach(collaboratorKey => {
        let collaborator = collaborators[collaboratorKey]

        html += CoDHRTemplates.collaborator({
            id: collaborator.id,
            name: collaborator.name,
            dept: CoDHRDepartments[collaborator.dept],
            rank: collaborator.rank,
        })
    })

    return html
}

function sortKeysByLastName(obj) {
    return Object.keys(obj).sort((a, b) => {
        const lastName = key => obj[key].name.split(' ').slice(-1)[0];
        return lastName(a).localeCompare(lastName(b));
    });
}

// for getting/manipulating DOM
function getEl(id) { return document.getElementById(id) }
function getElWithQuery(query) { return document.querySelector(query) }
function getElsWithQuery(query) { return document.querySelectorAll(query) }
function forElsMatching(query, callback) { [].forEach.call(document.querySelectorAll(query), callback) }
function clearEl(el) { while (el.firstChild) el.removeChild(el.firstChild) }
function appendToEl(el, html) {
    el.append(htmlToEl(html))
}
function prependToEl(el, html) {
    el.prepend(htmlToEl(html))
}
function htmlToEl(html) {
    let docFrag = document.createDocumentFragment()
    let range = document.createRange()
    range.setStart(docFrag, 0)
    docFrag.appendChild(range.createContextualFragment(html))
    return docFrag
}
const hideEl = (el) => el.classList.add('hidden')
const showEl = (el) => el.classList.remove('hidden')
function getCssVar(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(`--${variableName}`)
}
function setCssVar(variableName, value) {
    document.documentElement.style.setProperty(variableName, value)
}
function forEachKey(obj, callback) {
    Object.keys(obj).forEach(key => callback(key))
}
function getRandomKeys(obj, count = 3) {
    const keys = Object.keys(obj)
    const result = []

    for (let i = 0; i < Math.min(count, keys.length); i++) {
        const randomIndex = Math.floor(Math.random() * keys.length)
        result.push(keys.splice(randomIndex, 1)[0])
    }

    return result
}