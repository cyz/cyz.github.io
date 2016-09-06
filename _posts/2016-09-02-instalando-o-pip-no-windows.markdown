---
layout: post
title:  "Instalando o PIP - sistema de gerenciamento de pacotes de Python"
resume: "Instalando o PIP no Windows. O PIP pip é um sistema de gerenciamento de pacotes usado para instalar e gerenciar pacotes de software escritos na linguagem de programação Python. "
date:   2016-09-02 08:00:00
categories: python
facebook: cynzanoni
twitter: cynthiazanoni
author: Cynthia Zanoni
author-photo: cynthia-zanoni.jpg
resume-author: "Entusiasta e membro ativo de comunidades de tecnologia ligadas à Web e Mobile, organizadora de eventos como <strong>Mobile Summit</strong> e curadora do projeto WoMakersCode. Atualmente, é Evangelista Técnica na Microsoft Brasil."
---

<p>pip é um sistema de gerenciamento de pacotes usado para instalar e gerenciar pacotes de software escritos na linguagem de programação Python. </p>

##Interface de linha de comando

<p>Uma grande vantagem do pip é a facilidade de sua interface de linha de comando, que torna a instalação de pacotes de software Python tão fácil quanto emitir um comando:</p>

`pip install algum-nome-de-pacote`

Os usuários também podem implementar facilmente a remoção subsequente do pacote:

`pip uninstall algum-nome-de-pacote`

##Instalação

<p>Para instalar o PIP, faça download deste <a href="https://raw.github.com/pypa/pip/master/contrib/get-pip.py">arquivo</a> e salve-o na pasta C:PythonxxScripts (o xx é a versão do Python). <br/> Via prompt, navegue até a pasta e execute o código:</p>

`python get-pip.py`

<p>Caso não funcione o comando acima, você poderá baixar manualmente no link <a href="https://github.com/pypa/pip">PIP</a> descompacte o arquivo, extrai e navega até ele pelo prompt e execute a instalação através do setup.py.</p>

Verifica se não possui erro:

`python setup.py build`

 Instala o pacote:
 
`python setup.py install`

Feito isso, seu gerenciador de pacotes já estará funcionando.
