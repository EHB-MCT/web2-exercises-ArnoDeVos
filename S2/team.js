"use strict";

class Team {
    constructor() {
        this.teamname = 'my team';
        this.trainer = 'Ash';
        this.roster = [];
    }
    describeTeam() {
        let description = `This is ${this.teamname} by trainer ${this.trainer}:`;
        let team = "";
        this.roster.forEach(pokemon => {
            let pokemonType = [];
            let typeDiv = "";
            console.log(pokemon.types);
            pokemon.types.forEach(type => {
                pokemonType.push(type.type.name);
            });
            pokemonType.forEach(type => {
                typeDiv += `<p class="${type}">${type}</p>`;
            });
            let teamMember = `<div class="teamMember">
            <img class="pokemonImg" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p class="pokemonNr">Nr. ${pokemon.id}</p>
            <p class="pokemonName">${pokemon.name}</p>
            <div class="pokemonTypes">
                ${typeDiv}  
            </div>
            </div>`;
            team += teamMember;
        });
        return `<div id="teamDescription">${description}</div>
        <div id="teamComposition">${team}</div>`;
    }

}

export default Team;