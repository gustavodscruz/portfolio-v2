---
title: Explorando Streams com RabbitMQ: Meu Sistema de Votação "Vota Logo"
type: post
description: Um guia prático sobre meu projeto "Vota Logo", um sistema de votação desenvolvido em Java que explora conceitos de streams usando RabbitMQ, arquitetura e ideias para deploy.

tags:
  - java
  - rabbitmq
  - streams
  - arquitetura
  - github
  - votação
---

## Introdução

Recentemente, decidi mergulhar fundo no mundo dos streams e arquitetura distribuída desenvolvendo um sistema de votação chamado "Vota Logo". Este projeto, disponível no GitHub em [github.com/gustavodscruz/vota-logo](https://github.com/gustavodscruz/vota-logo), é construído em Java e tem como objetivo principal explorar os conceitos de streams utilizando RabbitMQ. Além disso, estou planejando dar deploy do sistema para torná-lo acessível e funcional em um ambiente real.

## Pré-requisitos

- Java JDK 11 ou superior instalado
- Conhecimento básico de Java e programação orientada a objetos
- Familiaridade com conceitos de mensageria (opcional, mas recomendado)
- RabbitMQ instalado e configurado (para desenvolvimento local)

## Iniciando o Projeto

### Clonando do GitHub

```bash
git clone https://github.com/gustavodscruz/vota-logo.git
cd vota-logo
```

### Configurando o Ambiente

1. Instale as dependências usando Maven:
```bash
mvn clean install
```

2. Configure o RabbitMQ localmente ou use uma instância em nuvem.

3. Execute o projeto:
```bash
mvn spring-boot:run
```

## Estrutura de Pastas

```
src/
├── main/
│   ├── java/
│   │   ├── com/
│   │   │   ├── gustavodscruz/
│   │   │   │   ├── votalogo/
│   │   │   │   │   ├── config/          # Configurações do RabbitMQ
│   │   │   │   │   ├── controller/      # Endpoints REST
│   │   │   │   │   ├── model/           # Entidades e DTOs
│   │   │   │   │   ├── service/         # Lógica de negócio
│   │   │   │   │   ├── stream/          # Manipulação de streams
│   │   │   │   │   └── VotaLogoApplication.java
│   └── resources/
│       ├── application.yml
│       └── static/
└── test/
    └── java/
        └── com/gustavodscruz/votalogo/
```

## Conceitos de Streams com RabbitMQ

### O que são Streams?

Streams no RabbitMQ permitem processamento de dados em tempo real de forma eficiente. Diferente das filas tradicionais, streams suportam retenção de mensagens e consumo concorrente.

```java
@Configuration
public class RabbitConfig {
    @Bean
    public StreamTemplate streamTemplate() {
        return new StreamTemplate(connectionFactory(), "votacao-stream");
    }
}
```

### Implementação Básica

```java
@Service
public class VotacaoService {
    @Autowired
    private StreamTemplate streamTemplate;

    public void registrarVoto(Voto voto) {
        streamTemplate.convertAndSend(voto);
    }
}
```

## Arquitetura do Sistema

O "Vota Logo" segue uma arquitetura baseada em microserviços leves, utilizando:

1. **API REST** para receber votos
2. **Streams do RabbitMQ** para processamento assíncrono
3. **Banco de dados** para persistência (opcional, dependendo da implementação)
4. **Processamento em tempo real** para contagem de votos

### Fluxo de Dados

1. Usuário envia voto via API
2. Voto é enviado para stream do RabbitMQ
3. Consumidores processam o stream
4. Resultados são agregados e armazenados

## Ideias para Deploy

Estou planejando várias opções de deploy:

### Docker

```dockerfile
FROM openjdk:11-jre-slim
COPY target/vota-logo-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

### Docker Compose

Também configurei um `docker-compose.yml` no projeto para facilitar o desenvolvimento local, incluindo o RabbitMQ e a aplicação Java. Isso permite subir todo o ambiente com um simples comando:

```bash
docker-compose up
```

Pretendo explorar mais sobre Docker, incluindo orquestração e otimização de imagens.

### Kubernetes

Usar manifests para deploy em cluster Kubernetes, com RabbitMQ como stateful set.

### Cloud (AWS/Azure)

- API Gateway para endpoints
- RabbitMQ na nuvem (Amazon MQ ou Azure Service Bus)
- Lambda functions para processamento

## Melhores Práticas Aprendidas

1. **Use streams para dados de alta frequência** como votos em tempo real
2. **Configure retenção adequada** para evitar perda de dados
3. **Implemente circuit breakers** para resiliência
4. **Monitore streams** com ferramentas como RabbitMQ Management UI

## Conclusão

Desenvolver o "Vota Logo" tem sido uma jornada incrível de aprendizado sobre streams e arquitetura distribuída. Com RabbitMQ, consegui implementar um sistema robusto e escalável. Além disso, estou explorando mais sobre Docker para melhorar o deploy e a orquestração de containers.

Benefícios alcançados:
- ✅ Processamento assíncrono eficiente
- ✅ Escalabilidade horizontal
- ✅ Tolerância a falhas
- ✅ Arquitetura moderna e flexível

O projeto está disponível no [GitHub](https://github.com/gustavodscruz/vota-logo) - contribuições são bem-vindas! Em breve, pretendo fazer o deploy e compartilhar mais sobre a experiência.

Bora desenvolver isso aí! 