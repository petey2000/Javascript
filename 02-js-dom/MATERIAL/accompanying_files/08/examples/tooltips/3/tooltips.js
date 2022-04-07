'use strict'

{
    const MOUSE_TO_TOOLTIP = 10

    const init = () =>
        $on(
            $on($$('.keyword'), 'mousemove', showTooltip),
            'mouseleave',
            hideTooltip,
        )

    const showTooltip = e => {
        $('#tooltip').style.display = 'block'
        $('#tooltip').style.top = e.clientY + MOUSE_TO_TOOLTIP + 'px'
        $('#tooltip').style.left = e.clientX + MOUSE_TO_TOOLTIP + 'px'
    }

    const hideTooltip = () => ($('#tooltip').style.display = 'none')

    init()
}
