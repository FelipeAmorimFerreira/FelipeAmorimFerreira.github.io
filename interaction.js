

const changeSession = (templateId) => {
    let mainSession = document.getElementById('resume-content')
    const content = document.getElementById(templateId).content
    let contentClone = content.cloneNode(true)
    if(mainSession.children.length === 2){
        mainSession.appendChild(contentClone)
    }
    else{
        let lastChild = mainSession.children[2]
        mainSession.removeChild(lastChild)
        mainSession.appendChild(contentClone)
    }
}