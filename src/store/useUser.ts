import { defineStore } from "pinia";
import { IUserStore} from '@/interfaces/IData'

export const useUser = defineStore('user',{
    state: ():IUserStore =>({
            userTable :{
                'nombre': {name: 'nombre',
                        visible:true},
                'numero': {name: 'numero',
                        visible:true},
                'correo': {name: 'correo',
                        visible:true},
                'motivo': {name: 'motivo',
                        visible:true},
                'estado': {name: 'estado',
                        visible:true},
                'fecha': {name: 'fecha ultimo contacto',
                        visible:true},
                'historial': {name: 'historial de contacto',
                        visible:true}

            },
            userData: {user: [
                {'nombre': 'josepo josefina',
                'numero': '12341asdfas1231',
                'correo': 'nagas@gmail.com',
                'motivo': 'desea atencion inmediata porque si',
                'estado': 'salvaje',
                'fecha': "10.10.2010",
                'historial': {
                '10.10.2010':'se cago en todo',
                '11.10.2010':'no se cago en todo',
                '12.10.2010':'tal vez se cago en todo',
                '13.10.2010':'definitivaamente se cago en todo',
            }},
                {'nombre': 'asdfaca',
                'numero': '123411gaga231',
                'correo': 'nagas@gmail.com',
                'motivo': 'desea atencion inmediata porque si',
                'estado': 'salvaje',
                'fecha': "10.10.2010",
                'historial': {
                '10.10.2010':'se cago en todo',
                '11.10.2010':'no se cago en todo',
                '12.10.2010':'tal vez se cago en todo',
                '13.10.2010':'definitivaamente se cago en todo',
            }},
                {'nombre': 'kaladin bendito por la serotonina',
                'numero': '123411agsdf231',
                'correo': 'nagas@gmail.com',
                'motivo': 'desea atencion inmediata porque si',
                'estado': 'salvaje',
                'fecha': "10.10.2010",
                'historial': {
                '10.10.2010':'se cago en todo',
                '11.10.2010':'no se cago en todo',
                '12.10.2010':'tal vez se cago en todo',
                '13.10.2010':'definitivaamente se cago en todo',
            }},
                {'nombre': 'shallan y shallan y shallan y shallan',
                'numero': '12341aha1231',
                'correo': 'nagas@gmail.com',
                'motivo': 'desea atencion inmediata porque si',
                'estado': 'salvaje',
                'fecha': "10.10.2010",
                'historial': {
                '10.10.2010':'se cago en todo',
                '11.10.2010':'no se cago en todo',
                '12.10.2010':'tal vez se cago en todo',
                '13.10.2010':'definitivaamente se cago en todo',
            }},
                {'nombre': 'el viejo culero',
                'numero': '1234112aga31',
                'correo': 'nagas@gmail.com',
                'motivo': 'desea atencion inmediata porque si',
                'estado': 'salvaje',
                'fecha': "10.10.2010",
                'historial': {
                '10.10.2010':'se cago en todo',
                '11.10.2010':'no se cago en todo',
                '12.10.2010':'tal vez se cago en todo',
                '13.10.2010':'definitivaamente se cago en todo',
            }},
                {'nombre': 'asociacion de dalinars unidos',
                'numero': '12341asdf1231',
                'correo': 'nagas@gmail.com',
                'motivo': 'desea atencion inmediata porque si',
                'estado': 'salvaje',
                'fecha': "10.10.2010",
                'historial': {
                '10.10.2010':'se cago en todo',
                '11.10.2010':'no se cago en todo',
                '12.10.2010':'tal vez se cago en todo',
                '13.10.2010':'definitivaamente se cago en todo',
            }},
]}
    }),
    actions:{
        changeVisivility(item:string){ 
            this.userTable[item].visible = !this.userTable[item].visible
        },
        createTableItem(name:string){
            let repairname = name.split(" ")[0]
            let i = 1
            while (repairname in this.userTable){
                repairname = `${repairname}${i}`
                i++
            }
            this.userTable[repairname] = {name: name, visible: true}
        }
    },
  persist: {
    storage: sessionStorage,
    paths: ['userTable', "userData"],
  },
})