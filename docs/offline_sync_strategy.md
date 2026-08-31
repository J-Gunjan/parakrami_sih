# Offline-First Data & Sync Architecture

## 1. Design Principles

- **Zero Network Blockers**: All UI operations, draft creation, image capture, and local validations execute synchronously without checking network state.
- **Local SQLite Persistence**: WatermelonDB is used for structured models with indexed queries.
- **Persistent Filesystem**: Evidence photos are stored in app document sandbox (`expo-file-system`) and referenced by relative URI in the local database.

## 2. Sync Engine Lifecycle

1. When an inspection record or violation is completed, an entry is added to `SyncQueue`.
2. When network connectivity is established:
   - Queue items are read sequentially in FIFO order.
   - Images are uploaded to object storage; the returned URL replaces local paths.
   - Structured JSON is sent via `POST /api/v1/sync/batch`.
3. Conflict resolution policy: **Last-Write-Wins** with server-side audit preservation.
