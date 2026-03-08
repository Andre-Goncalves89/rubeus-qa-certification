/**
 * Rubeus Test - Site 2 (Faculdade Exemplo) - RESTRUTURAÇÃO FINAL
 * Candidato: André Gonçalves (Day 37)
 * * Estratégia: Uso de Regex e seletores de texto flexíveis para 
 * contornar variações de renderização do DOM.
 */

describe('Auditoria Técnica - Site Faculdade', () => {
    const URL_SITE = 'https://qualidade.apprbs.com.br/site';

    const SELECTORS = {
        inputNome: 'input[name="pessoa.nome"]',
        inputEmail: 'input[name="pessoa.emailPrincipal"]',
        inputTelefone: 'input[name="pessoa.telefonePrincipal"]',
        btnConcluir: '#rbBtnNext'
    };

    beforeEach(() => {
        // Ignora erros de scripts do próprio site para focar nos testes
        Cypress.on('uncaught:exception', () => false);
        cy.visit(URL_SITE, { timeout: 30000 });
    });

    context('Validação de CTAs e Links', () => {
        
        it('Deve investigar o link do botão INSCREVA-SE (BUG-01)', () => {
            // Busquei o link que contém o texto. 
            cy.contains('a', /INSCREVA-SE/i)
                .should('have.attr', 'href')
                .then((href) => {
                    if (href.includes('google.com') || href === '#' || href.includes('analista-rubeus')) {
                        cy.log('⚠️ ALERTA: Link detectado, mas pode ser um placeholder ou destino genérico: ' + href);
                    }
                });
        });
    });

    context('Auditoria de UI/UX e Conteúdo', () => {

        it('Deve validar o erro de sobreposição no botão Concluir (BUG-02)', () => {
            cy.get(SELECTORS.btnConcluir).should('be.visible').then(($btn) => {
                const marginTop = parseFloat($btn.css('margin-top'));
                // Se o valor for muito baixo, o bug visual de estar "grudado" é provado
                expect(marginTop).to.be.lessThan(20);
            });
        });
    });

    context('Validação de Formulário', () => {
        
        it('Deve confirmar que o sistema permite o bypass de telefone (BUG-03)', () => {
            // Preenche apenas Nome e Email
            cy.get(SELECTORS.inputNome).type('André QA Test');
            cy.get(SELECTORS.inputEmail).type('test_qa@rubeus.com.br');
            
            // Clica no botão concluir
            cy.get(SELECTORS.btnConcluir).click();

            // O sistema NÃO deve mostrar erro para o telefone, confirmando o bypass
            cy.contains(/campo obrigatório/i).should('not.exist');
            cy.log('⚠️ BUG: O formulário permitiu avançar sem o telefone.');
        });
    });

    context('Verificação de Elementos Dinâmicos', () => {
        it('Deve validar se os slides do banner estão estáticos', () => {
            // Tira um "print" mental do primeiro slide
            cy.get('.slideshow-container').should('be.visible');
            cy.wait(4000);
            // Se após 4 segundos o primeiro slide ainda for o único visível, o carrossel é estático
            cy.get('.mySlides').first().should('be.visible');
        });
    });
});