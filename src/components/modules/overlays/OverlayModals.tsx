import { ModalsOverlayT } from '@/src/types/modals'
import { OverlayModals } from '@/src/types/overlays'
import styled, { css } from 'styled-components'

const OverlayModal = ({ closeEvent, holder, context, timeRealeses }: OverlayModals) => {
  const checker = (type: string): boolean | null =>
    context === type ? true : false

  return (
    <ModalsOverlay
      $language={checker('language')}
      $holder={holder}
      $timeRealeses={timeRealeses}
      onClick={() => {
        closeEvent()
      }}
    />
  )
}

export default OverlayModal

const ModalsOverlay = styled.div<ModalsOverlayT>`
  ${(props) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(132, 132, 132, 0.49);
    ${props.$language &&
    css`
      animation: ${props.$holder
        ? `overlay_rise ${props.$timeRealeses}s linear forwards`
        : `overlay_down ${props.$timeRealeses}s linear forwards`};
    `}
    @keyframes overlay_rise {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes overlay_down {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `}
`
