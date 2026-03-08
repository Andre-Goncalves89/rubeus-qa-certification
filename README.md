# 🛡️ Rubeus QA Automation - Certification Challenge

### Este repositório contém a suíte de testes automatizados desenvolvida para o processo seletivo da Rubeus. O projeto foca na validação de fluxos críticos de certificação, integridade de dados e auditoria de interface (UI/UX).

## 🚀 Onboarding Rápido (Quick Start)

### Demonstrando o foco em Portabilidade (padrão adotado no ecossistema TechNova), o projeto pode ser executado em 3 comandos:

## 1. Clone o repositório
```
git clone https://github.com/Andre-Goncalves89/rubeus-qa-certification.git
```
## 2. Instale as dependências
```
npm install
```
## 3. Execute os testes (Modo Headless)
```
npm test
```
---
## Auditoria Técnica: Principais Achados

### *Abaixo, os bugs críticos identificados durante o teste exploratório e validados via automação:*

Item

Descrição

Tipo

Gravidade

---
## **BUG-01**

Redirecionamento para google.com no rodapé

Funcional

Crítica

---
## **BUG-02**

Erro de runtime: ActionsForm is not defined

Lógica/JS

Alta

---
## **BUG-03**

Erro ortográfico "Salba mais" no Card 3

UI/Textual

Alta

---
## **BUG-04**

Bypass de campos obrigatórios (Nome/Telefone)

Funcional

Alta

---
## **BUG-05**

Aceitação de caracteres alfabéticos em campo Tel

Validação

Média

---

## ⚙️ Arquitetura e Diferenciais Técnicos

### 1. Resiliência de Seletores

**Devido à natureza dinâmica do DOM (GrapesJS), a suíte utiliza seletores baseados em atributos estáveis (name="pessoa.nome") e conteúdo textual (cy.contains), garantindo que os testes não quebrem com mudanças cosméticas de layout.**

### 2. Tratamento de Exceções (Anti-Fragilidade)**

**Implementação do listener uncaught:exception para capturar e isolar o erro de JavaScript nativo do site (ActionsForm), permitindo que a automação prossiga e valide os elementos visuais mesmo com falhas de script no ambiente de teste.**

### 3. Automação de Evidências

**Os testes de regressão foram configurados para falhar propositadamente onde os bugs persistem, servindo como uma prova técnica e visual da necessidade de correção.**

## 🛠️ Tecnologias Utilizadas

**Cypress 15.0+**

**Node.js**

**JavaScript (ES6)**

---

## 👨‍💻 Candidato

## **André Gonçalves**<br> Engenheiro de QA em Especialização | Criador do TechNova Lab

"Qualidade não é um ato, é um hábito." - Aristóteles
