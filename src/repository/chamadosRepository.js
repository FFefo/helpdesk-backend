import con from './connections.js'

export async function inserirChamado(chamado) {
    const comando = `
    insert into tb_chamados(ds_titulo, nv_impacto, dt_ocorrencia, id_usuario)
                     values(?, ?, ?, ?);
    `;

    let resposta = await con.query(comando, [chamado.titulo, chamado.impacto, chamado.data, chamado.idUsuario]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarChamados() {
    const comando = `
        select id_Chamado       id,
               ds_titulo       titulo,
               nv_impacto       impacto,
               dt_ocorrencia     ocorrência,
               id_usuario       usuario
         from tb_chamados
    `;

    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;

}

export async function alterarChamado(id, chamado) {
    const comando = `
    update tb_produtos
    set id_Chamado = ?,
        ds_titulo = ?,
        nv_impacto = ?,
        dt_ocorrencia = ?,
        id_usuario = ?
    where id_produto = ?
    `;

    let resposta = await con.query(comando, [chamado.titulo, chamado.impacto, chamado.data, chamado.idUsuario, id]);

    let info = resposta[0];

    return info.affectedRows;

}

export async function removerChamado(id) {
    const comando = `
    delete from tb_chamados
    where id_Chamado = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}