 import { render, renderHook } from "@testing-library/react";
 import {useCounter} from '../../hooks/useCounter';

 describe('Probando el useCounter', ()=>{

    test ('Debe retornar los valores por defecto', () => {
       const {result} = renderHook(()=>useCounter() );
       expect (result.current.counter).toBe(10);
    });

});