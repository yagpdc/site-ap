import styles from './dots.module.css'
import React, { ReactNode } from "react"

interface SectionProps {
    invert: boolean;
    children?: ReactNode;
}

function Dots (props: SectionProps){
    return (
        <div className={props.invert ? styles.containerUp : styles.container}>            
        </div>
    )
}
export default Dots