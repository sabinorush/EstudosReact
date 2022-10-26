import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';


export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/sabinorush.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Sabino</strong>
                            <time title="20 de outubro às 21h21" dateTime="2022-10-22 21:21:30">Cerca 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom!! Parabénss!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}