```flow
st=>start: Page d'accueil
op=>operation: Entrer le nom d'invocateur
cond=>condition: Existe ?
e=>end: Résultat/Donées

st->op->cond
cond(yes)->e
cond(no)->op
```

###**Légendes**


| Résultat           | Actions                     | Condition |
| :---------------:  |:---------------------------:|:--------: |
| Page d'accueil |   Entrer le nom d'un invocateur |  Existe   |
| Résultats/Données  |                 -           |     -     |

Vous trouverez ci-dessous le schéma du processus réalisé sur la plateforme Miro : 
![Process](/Process.jpg)
