// 'use strict';
async function listarVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    // console.log(conexao);
    const conexaoConvertida = await conexao.json();
    // console.log(conexaoConvertida);
    return conexaoConvertida;
}
// export const conectaAPI = { listarVideos };
// listarVideos();
window.conectaAPI = { listarVideos };