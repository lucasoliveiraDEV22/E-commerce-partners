/*
    store => cadastrar/adicionar
    index => listar as informações
    show => listar apenas UM
    update => atualizar
    delete => delete

    OBS: Nunca posso ter dois métodos iguais no mesmo controller!!
*/

import User from '../models/User'

import { v4 } from 'uuid'

const user = await User.create({
    id: v4(),
    name: 'Alan',
    email: 'contato23@mail.com',
    password_hash: '23as5678',
    admin: true,
  })
