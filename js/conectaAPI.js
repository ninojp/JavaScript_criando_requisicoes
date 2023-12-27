'use strict';
async function listarVideosApi(){
    const conexao = await fetch("http://localhost:3000/videos");
    // console.log(conexao);
    const conexaoConvertida = await conexao.json();
    // console.log(conexaoConvertida);
    return conexaoConvertida;
}
export const conectaAPI = { listarVideosApi };

// listarVideos();
// export default listarVideosApi;
// window.conectaAPI = { listarVideos };