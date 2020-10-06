# Micro-Frontends
## What are micro-frontends?
Micro-frontends are independent wep applications, developed by independent teams, hosted in their own containers.  
Micro-frontends are essentially derived from the concept of micro-services. 

![micro-frontend](https://i.imgur.com/fw24Edr.png)

## Demo [Single-SPA Approach]
*This demo does not include Micro-Services*.  
The solution provided has 5 micro-frontends(vue, angular, react):

![single-spa](https://i.imgur.com/OXrHNF9.png)

| Component | URL | Framework |
| ------ | ------ | ------ |
| root-config | https://aec-root-config.herokuapp.com/ | s-SPA Root |
| root-theme | https://aec-root-theme.herokuapp.com/ | s-SPA Style Guide |
| header-app | https://aec-header-app.herokuapp.com/ | Vue |
| sidebar-app | https://aec-sidebar-app.herokuapp.com/ | React |
| table-app | https://aec-table-app.herokuapp.com/ | Angular |
| form-app | https://aec-form-app.herokuapp.com/ | Vue |
| list-app | https://aec-list-app.herokuapp.com/ | React |

- Each micro-frontend will be served on its independent server.  
- Each micro-frontend will be injected into the **Root** by using system.js.
- Due to simplicity of this demo, communications between micro-frontends will be done through JavaScript Events.
- To maintain a specific microfrontend, there is no need to clone all repositories to be able to run the application locally. 
with s-SPA, you can inject your local micro-frontend into root application directly. even if the application is not hosted locally.
- To create a new microfrontend, `create-single-spa cli` could be used to ease the process, after creation, it can be injected to root-config.
- It is not recommended to use multiple frameworks within the application, as it leads to performance issues.

### Steps
1. Clone any repository
2. Run `npm install` or `yarn add` on cloned repository.
3. Run `npm run start:dev` or `yarn start:dev`.
4. Navigate to https://aec-root-config.herokuapp.com/.
5. Add `dev-tools:true` to local storage using `localStorage.setItem('devtools', true)` in console, then refresh the page.
6. Click on the curly brackets `{..}` at bottom right to open s-SPA window to override the domain of a specific microfrontend to your localhost.  
![s-SPA](https://i.imgur.com/AJfgio4.png)
![s-SPA-form](https://i.imgur.com/JXkwH65.png)

## Pros & Cons
The following are pros and cons of micro-frontends using iframe approach  
### Pros
- Separation of code promotes faster development, each feature will be built from scratch with almost no dependency on any other application except **root-config**.
- Separation of deployments! each module will be deployed and served independently 
- Better maintenance! if an issue arrise on a module, it will not affect the rest of the web application.
- Better scalability! new features could be implemented from scratch and injected into the app.
- Shared dependencies! yields better performance, if a library is used across multiple modules, it can be shared from **root-config**
- In-Browser modules! s-SPA makes use of system.js, which enables libraries to be downloaded from browsers end rather than bundling them within the application.

### Cons
- microfrontends can be injected into root application to run & be displayed, however they can't run by themselves on their own server.
- half of single-spa documentation & examples are outdated.
- 1 layout in the root application could be implemented, however [single-spa layouts](https://single-spa.js.org/docs/layout-overview) are under-development to tackle this issue.

## Conclusion
Micro-Frontends has great potential in solving enterprise web applications issues when it comes to scalability and maintenance. 
Based on this demo, and my personal analysis, I believe that single-spa is potential approach to micro-frontends.  

### Other Approaches
- [FrintJS](https://frint.js.org/)
- [Web Components](https://www.webcomponents.org/introduction) *not a framework, but a browser feature, it might be the future to micro-frontends*
- [Tailor](https://github.com/zalando/tailor)
- [qiankun（乾坤）](https://github.com/umijs/qiankun)
- [Luigi](https://luigi-project.io/)
- [PuzzleJs](https://github.com/puzzle-js/puzzle-js)
- [icestark](https://github.com/ice-lab/icestark)
- [Piral](https://piral.io/)
- [mooa](https://github.com/phodal/mooa)
- [ngx-planet](https://github.com/worktile/ngx-planet)
