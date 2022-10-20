import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
                alt="logotipo usuário"
            />
            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/57204754?v=4"
                    alt="Avatar usuário"
                />

                <strong>Gustavo Sabino</strong>
                <span>Web developer</span>
            </div>

            <footer>

                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}