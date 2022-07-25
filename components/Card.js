import styles from '../styles/TeamCard.module.css'

export default function CardGroup(){
    return(
        <div className={styles.teamCardWrapper}>
            <Card 
            img="../team/11_sheila-kalas.png"
            memberName="Sheila Kalas"
            jobTitle="Fitness Plus Owner/Master Trainer"
            firstName="Sheila"
            />
            <Card 
            img="../team/10_matt-ramsay.png"
            memberName="Matt Ramsay"
            jobTitle="Personal Trainer"
            firstName="Matt"
            />
            <Card 
            img="../team/9_sarah-howard.png"
            memberName="Sarah Barnett"
            jobTitle="Personal Trainer"
            firstName="Sarah"
            />
            <Card 
            img="../team/8_Rob-Sweet.png"
            memberName="Rob Sweet"
            jobTitle="Master Trainer"
            firstName="Rob"
            />           
            <Card 
            img="../team/7_joey-hacker.png"
            memberName="Joey Hacker"
            jobTitle="Personal Trainer"
            firstName="Joey"
            />          
            <Card 
            img="../team/6_jessica-ray.png"
            memberName="Jessica Ray"
            jobTitle="Personal Trainer"
            firstName="Jessica"
            />
            <Card 
            img="../team/5_alana-wall.png"
            memberName="Alana Wall, M.S., ACT CPT"
            jobTitle="ACE Health Coach, Personal Trainer"
            firstName="Alana"
            />           
            <Card 
            img="../team/4_amanda-holland.png"
            memberName="Amanda Holland"
            jobTitle="Personal Trainer"
            firstName="Amanda"
            />
            <Card 
            img="../team/3_AmberWilliams.png"
            memberName="Amber Williams"
            jobTitle="Personal Trainer"
            firstName="Amber"
            />           
            <Card 
            img="../team/2_chris-collins.png"
            memberName="Chris Collins"
            jobTitle="Personal Trainer"
            firstName="Chris"
            />          
            <Card 
            img="../team/1_chris-williams-21.png"
            memberName="Chris Williams"
            jobTitle="Master Trainer"
            firstName="Chris"

            />
            <Card 
            img="../team/0_erica-broadway.png"
            memberName="Erica Broadway, M.S., ACT CPT."
            jobTitle="Personal Trainer"
            firstName="Erica"
            />

        </div>
    )
}

function Card(props){
    return(
        <div className={styles.teamCard}>
            <div className={styles.card_image_container}>
                <img src={props.img} className={styles.cardImage}/>
            </div>
            <div className={styles.card_content_container}>
                <div className={styles.card_trainer_name}>{props.memberName}</div>
                <div className={styles.jobTitle}>{props.jobTitle}</div>
                <button className={styles.cardButton}>Learn more about {props.firstName}</button>
            </div>
        </div>
    )
}