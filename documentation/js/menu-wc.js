'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-fil-rouge documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4ce76470baf8efa4cce60403ac11b4918d7bd724daed42c34a74d5e47950bf7ad2e375072f612a035a946e8fab265b3d5b92b5b5e8d9d7c851177188b2e2a622"' : 'data-target="#xs-components-links-module-AppModule-4ce76470baf8efa4cce60403ac11b4918d7bd724daed42c34a74d5e47950bf7ad2e375072f612a035a946e8fab265b3d5b92b5b5e8d9d7c851177188b2e2a622"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4ce76470baf8efa4cce60403ac11b4918d7bd724daed42c34a74d5e47950bf7ad2e375072f612a035a946e8fab265b3d5b92b5b5e8d9d7c851177188b2e2a622"' :
                                            'id="xs-components-links-module-AppModule-4ce76470baf8efa4cce60403ac11b4918d7bd724daed42c34a74d5e47950bf7ad2e375072f612a035a946e8fab265b3d5b92b5b5e8d9d7c851177188b2e2a622"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link" >ClientModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientRoutingModule.html" data-type="entity-link" >ClientRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommandeModule.html" data-type="entity-link" >CommandeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' : 'data-target="#xs-components-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' :
                                            'id="xs-components-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' }>
                                            <li class="link">
                                                <a href="components/CommandeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LigneComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LigneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivraisonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivraisonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanierComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PanierComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' : 'data-target="#xs-pipes-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' :
                                            'id="xs-pipes-links-module-CommandeModule-d8d331ab06749a1c450a6363d40b797d8607fe017c0130e4406082584913fa5bdbde2332e325d0484221aea28e45e57c92f7e0ee052fe0632cda4c5113a5ead8"' }>
                                            <li class="link">
                                                <a href="pipes/DateFilter.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateFilter</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FiltreEtat.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiltreEtat</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommandeModule.html" data-type="entity-link" >CommandeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CommandeModule-7f80b7e315cae16025887cf9a627ffa92d43b8b9a5640f1f49f2282f0f24e0aa65e4f2c96dda50878b8323cb67b2e69ad212f219a237ee1c30afd7892bfe940b-1"' : 'data-target="#xs-components-links-module-CommandeModule-7f80b7e315cae16025887cf9a627ffa92d43b8b9a5640f1f49f2282f0f24e0aa65e4f2c96dda50878b8323cb67b2e69ad212f219a237ee1c30afd7892bfe940b-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CommandeModule-7f80b7e315cae16025887cf9a627ffa92d43b8b9a5640f1f49f2282f0f24e0aa65e4f2c96dda50878b8323cb67b2e69ad212f219a237ee1c30afd7892bfe940b-1"' :
                                            'id="xs-components-links-module-CommandeModule-7f80b7e315cae16025887cf9a627ffa92d43b8b9a5640f1f49f2282f0f24e0aa65e4f2c96dda50878b8323cb67b2e69ad212f219a237ee1c30afd7892bfe940b-1"' }>
                                            <li class="link">
                                                <a href="components/ListeLivreurComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListeLivreurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LivreurComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LivreurComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CommandeRoutingModule.html" data-type="entity-link" >CommandeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommandeRoutingModule.html" data-type="entity-link" >CommandeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GestionnaireModule.html" data-type="entity-link" >GestionnaireModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-GestionnaireModule-8249c0af5c06bb782de4bbf985f6e158b6ecf34c63c596503a82e97616b05e806bd99d531d9b0610ccb8f73d1f3ff6d19ee1cc05c483703f5627e3f50335dcce"' : 'data-target="#xs-pipes-links-module-GestionnaireModule-8249c0af5c06bb782de4bbf985f6e158b6ecf34c63c596503a82e97616b05e806bd99d531d9b0610ccb8f73d1f3ff6d19ee1cc05c483703f5627e3f50335dcce"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-GestionnaireModule-8249c0af5c06bb782de4bbf985f6e158b6ecf34c63c596503a82e97616b05e806bd99d531d9b0610ccb8f73d1f3ff6d19ee1cc05c483703f5627e3f50335dcce"' :
                                            'id="xs-pipes-links-module-GestionnaireModule-8249c0af5c06bb782de4bbf985f6e158b6ecf34c63c596503a82e97616b05e806bd99d531d9b0610ccb8f73d1f3ff6d19ee1cc05c483703f5627e3f50335dcce"' }>
                                            <li class="link">
                                                <a href="pipes/CommandeCLientFilter.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeCLientFilter</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CommandeDateFilter.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeDateFilter</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CommandeFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/CommandeZoneFilter.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommandeZoneFilter</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GestionnaireRoutingModule.html" data-type="entity-link" >GestionnaireRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"' : 'data-target="#xs-components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"' :
                                            'id="xs-components-links-module-LayoutModule-bcd0817d914168a1c84b337a783b5774d2eb9d4dfe37e032258cfb3cc2237499ce453d38f24c776a5d21b2568f2b16af6f8e015450e9e5d4453a616d6d788071"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProduitModule.html" data-type="entity-link" >ProduitModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProduitModule-7f9513e85e668acdfcf7eef26af757baba562540669dbee0de7289094285f42d18a075aefe224bd1849da41a1ee7e79efd9d22064fa8fc626017c51b6bc5b694"' : 'data-target="#xs-components-links-module-ProduitModule-7f9513e85e668acdfcf7eef26af757baba562540669dbee0de7289094285f42d18a075aefe224bd1849da41a1ee7e79efd9d22064fa8fc626017c51b6bc5b694"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProduitModule-7f9513e85e668acdfcf7eef26af757baba562540669dbee0de7289094285f42d18a075aefe224bd1849da41a1ee7e79efd9d22064fa8fc626017c51b6bc5b694"' :
                                            'id="xs-components-links-module-ProduitModule-7f9513e85e668acdfcf7eef26af757baba562540669dbee0de7289094285f42d18a075aefe224bd1849da41a1ee7e79efd9d22064fa8fc626017c51b6bc5b694"' }>
                                            <li class="link">
                                                <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CatalogueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChoixBoissonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChoixBoissonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComplementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComplementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProduitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProduitComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProduitRoutingModule.html" data-type="entity-link" >ProduitRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SecuriteModule.html" data-type="entity-link" >SecuriteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"' : 'data-target="#xs-components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"' :
                                            'id="xs-components-links-module-SecuriteModule-7f3e133d3c6610fa9b4664f713c9e7da16539197c6089d067fde84da695f5f3a15119071ff904a3163e6aef78a5728dc675a21c57c34d31a60443567b6abfb0e"' }>
                                            <li class="link">
                                                <a href="components/ConnexionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConnexionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SecuriteRoutingModule.html" data-type="entity-link" >SecuriteRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CommandeComponent-1.html" data-type="entity-link" >CommandeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LivraisonComponent-1.html" data-type="entity-link" >LivraisonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SecuriteComponent.html" data-type="entity-link" >SecuriteComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CatalogueService.html" data-type="entity-link" >CatalogueService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommandeService.html" data-type="entity-link" >CommandeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CommandeService-1.html" data-type="entity-link" >CommandeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link" >EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PanierService.html" data-type="entity-link" >PanierService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SessionLoginService.html" data-type="entity-link" >SessionLoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TokenLoginService.html" data-type="entity-link" >TokenLoginService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptorService.html" data-type="entity-link" >TokenInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/RoleGuardGuard.html" data-type="entity-link" >RoleGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BoissonTailleBoisson.html" data-type="entity-link" >BoissonTailleBoisson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BurgerCommande.html" data-type="entity-link" >BurgerCommande</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Catalogue.html" data-type="entity-link" >Catalogue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Commande.html" data-type="entity-link" >Commande</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommandeBoisson.html" data-type="entity-link" >CommandeBoisson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommandeFrite.html" data-type="entity-link" >CommandeFrite</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CommandeMenuBoissonTaille.html" data-type="entity-link" >CommandeMenuBoissonTaille</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Detail.html" data-type="entity-link" >Detail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu-1.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuBurger.html" data-type="entity-link" >MenuBurger</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuCommande.html" data-type="entity-link" >MenuCommande</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuPortion.html" data-type="entity-link" >MenuPortion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuTailleBoisson.html" data-type="entity-link" >MenuTailleBoisson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Panier.html" data-type="entity-link" >Panier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Produit.html" data-type="entity-link" >Produit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TailleBoisson.html" data-type="entity-link" >TailleBoisson</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TailleBoissonMenu.html" data-type="entity-link" >TailleBoissonMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Token.html" data-type="entity-link" >Token</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Zone.html" data-type="entity-link" >Zone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Zone-1.html" data-type="entity-link" >Zone</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/authorizToks.html" data-type="entity-link">authorizToks</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
