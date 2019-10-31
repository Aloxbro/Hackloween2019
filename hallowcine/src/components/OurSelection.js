import React from "react";
import { Grid, Cell } from "react-mdl";
import "./ourselection.css";

function OurSelection() {
  return (
    <div className="div-body">
      <Grid className="grid-one">
        <Cell className="cell-title" col={12}>
          <h1>Coup de coeur d'Alexis</h1>
        </Cell>
        <Cell className="cell-one" col={6}>
          <img
            src="http://cineclap.free.fr/saw/saw-a01.jpg?jamwlb"
            alt="poster"
          />
        </Cell>
        <Cell className="cell-two" col={6}>
          <div>
          <h3>Saw</h3>
          <p>
            Deux hommes, Adam et Lawrence, sont enchaînés dans une salle de
            bains sanglante. Tous deux ne se connaissent pas, mais ont été
            piégés par un tueur en série qui impose à ses victimes un choix
            entre la vie et la mort dans des pièges sadiques et sanglants. L'un
            doit s'échapper de la salle de bains et l'autre doit le tuer ; sinon
            sa femme et sa fille mourront.
          </p>
          </div>
        </Cell>
        <Cell className="cell-title" col={12}>
          <h1>Coup de coeur d'Anthony</h1>
        </Cell>
        <Cell className="cell-one" col={6}>
          <img
            src="https://nsa40.casimages.com/img/2019/10/07/191007045137446852.jpg"
            alt="poster"
          />
        </Cell>
        <Cell className="cell-two" col={6}>
          <p>
            Marion Crane en a assez de ne pouvoir mener sa vie comme elle
            l'entend. Son travail ne la passionne plus, son amant ne peut
            l'épouser car il doit verser une énorme pension alimentaire le
            laissant sans le sou... Mais un beau jour, son patron lui demande de
            déposer 40 000 dollars à la banque. La tentation est trop grande, et
            Marion s'enfuit avec l'argent.
          </p>
        </Cell>
        <Cell className="cell-title" col={12}>
          <h1>Coup de coeur de Jessy</h1>
        </Cell>
        <Cell className="cell-one" col={6}>
          <img
            src="https://nsa40.casimages.com/img/2019/10/07/19100704504840469.jpg"
            alt="poster"
          />
        </Cell>
        <Cell className="cell-two" col={6}>
          <p>
            Écrivain, Jack Torrance est engagé comme gardien, pendant tout
            l’hiver, d’un grand hôtel isolé du Colorado – l’Overlook – où il
            espère surmonter enfin sa panne d’inspiration. Il s’y installe avec
            sa femme Wendy et son fils Danny, doté d’un don de médium. Tandis
            que Jack n’avance pas dans son livre et que son fils est de plus en
            plus hanté par des visions terrifiantes, il découvre les terribles
            secrets de l’hôtel et bascule peu à peu dans une forme de folie
            meurtrière où il s’en prend à sa propre famille…
          </p>
        </Cell>
        <Cell className="cell-title" col={12}>
          <h1>Coup de coeur de Sophie</h1>
        </Cell>
        <Cell className="cell-one" col={6}>
          <img
            src="https://nsa40.casimages.com/img/2019/10/07/191007050328565866.jpg"
            alt="poster"
          />
        </Cell>
        <Cell className="cell-two" col={6}>
          <p>
            Lorsque les Bowen emménagent dans leur nouvelle maison, ils sont
            rapidement confrontés à des phénomènes étranges. Une présence hante
            les lieux. Une nuit, leur plus jeune fille, Maddie, disparaît. Pour
            avoir une chance de la revoir, tous vont devoir mener un combat
            acharné contre un terrifiant poltergeist…
          </p>
        </Cell>
      </Grid>
    </div>
  );
}

export default OurSelection;
