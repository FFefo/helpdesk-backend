import con from "./connection.js";

export async function inserirUsuario(pessoa) {
    const comando = `
        insert into tb_usuarios(nm_usuario)
                       values (?)
    `;

    let resposta = await con.query(comando, [pessoa.nome]);
    let info = resposta [0];

    return info.insertId;
}

export async function validarUsuario(pessoa){
    const comando = `
        select
            id_usuario id,
            nm_usuario nome
        from tb_usuarios
        where
            nm_usuario = ?
    `;

    let registros = await con.query(comando, [pessoa.nome]);
    return registros[0][0];
}