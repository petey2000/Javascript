'use strict'

{
    const highlightChatMembers = () => {
        const searchFor = 'ert'

        const liNodes = $$('#chat_members li')
        const liNodesFound = liNodes.filter(liNode =>
            liNode.innerHTML.includes(searchFor),
        )

        liNodesFound.forEach(li => li.classList.add('highlighted'))
    }

    const $$ = q => Array.from(document.querySelectorAll(q))

    highlightChatMembers()
}
