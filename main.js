const LinksSocialMedia = {
    // Objeto que contem os usuarios das redes sociais
    github: 'thyagojesus',
    youtube: 'thyagojesus',
    facebook: 'Thyago Jesus',
    instagram: 'thyago_jesus',
    twitter: 'thyagoJesus'
}

function changeSocialMidiaLinks() {
    // Função que altera os links da TAG <a>
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    }
}
changeSocialMidiaLinks()

function getGitProfileInfos() {
    const url = `https://api.${document
    .getElementById('github')
    .getAttribute('alt')}.com/users/${LinksSocialMedia['github']}`
    console.log(url)

    fetch(url).then(response =>
            response.json().then(data => {;
                (document.getElementById('userName').textContent = data.name),
                (document.getElementById('userBio').textContent = data.bio),
                (userLink.href = data.html_url),
                (userLink = data.login),
                (userImage.src = data.avatar_url),
                (userLogin.textContent = data.login)
            })
        ) // O FETCH é uma função que armazena o retorno a API. o 1º THEN é uma promessa, recebe o conteudo de FETCH e execulta algo, nesse caso ele recebe uma função ARROW que converte o conteudo em .json
}
getGitProfileInfos()