import { defineStore } from "pinia";
import { IUserStore} from '@/interfaces/IData'

export const useUser = defineStore('user',{
    state: ():IUserStore =>({
            userTable :{
                'nombre': {name: 'nombre',
                        visible:true,
                        prevalues:[],
                        useprevalues:false},
                'numero': {name: 'numero',
                        visible:true,
                        prevalues:[],
                        useprevalues:false},
                'correo': {name: 'correo',
                        visible:true,
                        prevalues:[],
                        useprevalues:false},
                'motivo': {name: 'motivo',
                        visible:true,
                        prevalues:[],
                        useprevalues:false},
                'estado': {name: 'estado',
                        visible:true,
                        prevalues:[],
                        useprevalues:false},
                'fecha': {name: 'fecha ultimo contacto',
                        visible:true,
                        prevalues:[],
                        useprevalues:false},
                'historial': {name: 'historial de contacto',
                        visible:true,
                        prevalues:[],
                        useprevalues:false}

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
        createTableItem(name:string, prevalues:Array<string>=[], useprevalues=false ){
            let keyname = name.split(" ")[0]
            let i = 1
            while (keyname in this.userTable){
                keyname = `${keyname}${i}`
                i++
            }
            this.userTable[keyname] = {name: name, visible: true, prevalues : prevalues, useprevalues : useprevalues}
        },
        editTableItem(indice: string, name:string, prevalues:Array<string>=[], useprevalues=false ){
           this.userTable[indice] = {name: name, visible: true, prevalues: prevalues, useprevalues: useprevalues}
        }
    },
  persist: {
    storage: sessionStorage,
    paths: ['userTable', "userData"],
  },
})