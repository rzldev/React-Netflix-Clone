import React, { useEffect, useState } from 'react'
import { Container } from './Transition.styles'

interface Props {
    show: boolean,
    children?: React.ReactElement,
    duration: number,
}

function Transition({ show, children, duration }: Props) {

    const [enter, setEnter] = useState(show);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null;
        if (enter !== show) {
            if (enter) {
                timer = setTimeout(() => {
                    setEnter(show);
                }, duration);
            } else {
                setEnter(show);
            }
        }

        return () => {
            if (timer !== null) clearTimeout(timer);
        }
    }, [enter, show, duration]);

    return (
        <React.Fragment>
            {
                (show || enter) && (
                    <Container show={show === enter} duration={duration}>
                        {children}
                    </Container>
                )
            }
        </React.Fragment>
    )
}

export default Transition