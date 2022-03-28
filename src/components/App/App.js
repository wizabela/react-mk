import React from "react";

import './App.css';
import {Dialog} from "../common/Dialog/Dialog";


export const App = props => {
    return <>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus deleniti deserunt expedita
            impedit laudantium maiores maxime minima molestiae mollitia neque nobis, perferendis quasi quo recusandae
            sequi sit soluta voluptates!</p>

        <Dialog title="Witam">
            Witaj serdecznie na stronie głównej.
        </Dialog>

        <Dialog title="Testowe okno">
            <h1>Tytuł okna</h1>
            <p>Sialalala</p>
            <p>A to trochę tekstu...</p>
        </Dialog>

        <p>Adipisci assumenda consequuntur delectus esse est laudantium libero
        obcaecati odit quae unde. Autem laboriosam libero maxime ratione repudiandae sapiente tempora. Autem blanditiis
        culpa dolores eius exercitationem nemo, saepe vel veritatis!</p><p>Accusamus suscipit, veniam. Ab architecto
        aspernatur, assumenda cumque eaque enim hic, id impedit in libero molestias, necessitatibus nobis non odit
        praesentium ratione repudiandae soluta vitae! Ab inventore suscipit veniam voluptate.</p><p>Alias autem
        cupiditate ducimus quisquam! Ad adipisci necessitatibus neque nisi placeat soluta vero. Ab accusantium autem
        deserunt et fugiat, iusto laboriosam modi mollitia quidem repudiandae sint voluptatem voluptatum? Aut,
        iusto!</p>
    </>
};