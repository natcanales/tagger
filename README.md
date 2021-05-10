| Method          | Endpoint                        | Funcionalidad                |
| --------------- | ------------------------------- | ---------------------------- |
| Post            | / admin / new-tag               | Guardar etiqueta nueva       |
| Get             | / admin / user-list             | Lista de users               |
| Delete          | / admin / delete-post / :postId | Borrar posts                 |
| Delete          | / admin / delete-user / :userId | Borrar user (borrado lógico) |
| Delete          | / admin / delete-tag / :tagId   | Borrar tags                  |
| Get             | / admin / edit-tag / :tagId     | Editar tag                   |
| Put             | / admin / edit-tag / :tagId     | Guardar edición del tag      |
| Post            | / new-user                      | Guardar nuevo user           |
| Post            | / login                         | Crear cookie                 |
| Post            | / logout                        | Romper cookie                |
| Get             | / user / :username              | Perfil de usuario            |
| Post            | / new-post                      | Crear posts                  |
| Get             | / edit-post / :postId           | Editar post                  |
| Put             | / edit-post / :postId           | Guardar edición del post     |
| Post            | / add-user / :username          | Añadir user a favorito       |
| Post            | / add-tag / :tagname            | Añadir tag a favorito        |