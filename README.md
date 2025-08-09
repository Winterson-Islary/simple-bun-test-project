
# TypeScript Clean Architecture Test Project

This is a test project demonstrating **good practices** and **clean architecture** patterns in TypeScript, with a focus on **learning testing** methodologies.

## Purpose

This project serves as a learning playground for:
- Clean Architecture principles
- TypeScript best practices
- Testing strategies and patterns
- Dependency injection and inversion
- Proper separation of concerns

## Architecture

The project follows a clean architecture pattern with clear separation of layers:

```
src/
├── controllers/     # HTTP request handlers
├── services/        # Business logic layer
├── repositories/    # Data access layer
├── entities/        # Domain models
├── dtos/            # Data transfer objects with validation
└── mappers/         # Entity-to-DTO transformations
```

## Tech Stack

- **Runtime**: Bun
- **Language**: TypeScript
- **Validation**: Zod
- **Error Handling**: Neverthrow
- **HTTP Status**: http-status-codes
- **Testing**: Built-in Bun test runner

## Getting Started

### Prerequisites
- Bun runtime

### Installation & Running

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run in development mode:
   ```bash
   bun run dev
   ```

3. Run tests:
   ```bash
   bun test
   ```

## Key Features Demonstrated

### Clean Architecture Layers
- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic
- **Repositories**: Manage data persistence (currently mocked)
- **Entities**: Define domain models
- **DTOs**: Validate and shape data transfer

### Good Practices Showcased
- **Dependency Injection**: Services inject repositories
- **Input Validation**: Zod schemas for DTOs
- **Error Handling**: Consistent error responses
- **Type Safety**: Full TypeScript coverage
- **Separation of Concerns**: Each layer has a single responsibility
- **Testability**: Modular design enables easy unit testing

### Testing Focus
- Unit tests for individual components
- Integration testing patterns
- Mocking strategies for external dependencies
- Test-driven development examples

## Testing Strategy

This project emphasizes testing at multiple levels:

1. **Unit Tests**: Individual functions and classes
2. **Integration Tests**: Component interactions
3. **Contract Tests**: API response validation

## Project Structure

```
├── src/
│   ├── controllers/    # Request/response handling
│   ├── services/       # Business logic
│   ├── repositories/   # Data access (mocked)
│   ├── entities/       # Domain models
│   ├── dtos/          # Validation schemas
│   └── mappers/       # Data transformations
├── tests/             # Test files
└── index.ts          # Application entry point
```

## Learning Objectives

Through this project, you can learn:

- How to structure a TypeScript application
- Implementing clean architecture principles
- Writing testable code
- Using modern TypeScript features
- Applying SOLID principles
- Error handling best practices
- API design patterns

## Current Implementation

The project currently implements a simple User management system with:
- User retrieval by ID
- Proper error handling
- Input validation
- Clean separation between layers

*Note: Data is currently mocked for testing purposes.*

## Future Enhancements

- Database integration
- Authentication/Authorization
- More comprehensive test coverage
- API documentation
- Logging implementation
- Configuration management

---

This project is designed to be a reference implementation for TypeScript best practices and testing strategies.
