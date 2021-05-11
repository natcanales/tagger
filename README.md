| Method          | Endpoint                         | Funcionalidad                |
| --------------- | -------------------------------- | ---------------------------- |
| Post            | / admin / new-tag                | Guardar etiqueta nueva       |
| Get             | / admin / users-list             | Lista de users               |
| Get             | / admin / tag-list               | Lista de users               |
| Delete          | / admin / delete-post / :postId  | Borrar posts                 |
| Delete          | / admin / delete-user / :userId  | Borrar user (borrado lógico) |
| Delete          | / admin / delete-tag / :tagId    | Borrar tags                  |
| Get             | / admin / edit-tag / :tagId      | Editar tag                   |
| Put             | / admin / edit-tag / :tagId      | Guardar edición del tag      |
| Post            | / auth / new-user                | Guardar nuevo user           |
| Post            | / auth / login                   | Crear cookie                 |
| Post            | / auth / logout                  | Romper cookie                |
| Post            | / post / new                     | Crear posts                  |
| Get             | / post / edit / :postId          | Editar post                  |
| Put             | / post / edit / :postId          | Guardar edición del post     |
| Get             | / user / current-user            | Perfil de usuario loggeado   |
| Get             | / user / :username               | Perfil de otro usuario       |
| Post            | / user / add-fav-user / :username| Añadir user a favorito       |
| Post            | / user / add-fav-tag / :tagname  | Añadir tag a favorito        |