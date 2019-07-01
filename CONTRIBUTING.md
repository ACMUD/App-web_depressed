## Contribucion y lineamientos

para agregar cambios o segerirlos sedeben seguir las soguientes normas

---

se tienen 3 ramas que tiene cierta jerarquia

***master (intocable)*** esta esta rama solo tendra los cambios para el ambiente de produccion.

***prepord (intocable)*** ambiennte de pruebas / preproduccion

***dev (desarrollo en local)*** esta rama contendra desarrollo en local pero no se admitira subir cambios directos sobre esta rama.

---
### no se admitira subir cambios directos sobre ninguna de las 3 ramas anteriores, si esto sucede esos cambios seran borrados
---

### Aportes

los cambios a realizar ya sean tareas asignadas o contribuciones deberan ser realizados en una rama propia, esta rama debe salir apartir de la rama dev.

### Integracion de cambios

para integrar los cambios realizados deben realizarce por medio de pull request usando la pllataforma.

adicionalmente los cambios y los pulll request deben de etiquetar al issue del cual hacen parte, es decir si su cambio o adicion es parte de la tarea que tiene un  **#8** en local al momento de realizar un commit escriben el texto del cambio que realizo y luego **#8**

```javascript
git commit -m "ajuste de ... #8"
```

con ello al subir sus cambios a su respectiva rama , estos cambios quedaran linkeados al issue correspondiente.