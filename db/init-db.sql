CREATE TABLE users
(
    id         SERIAL PRIMARY KEY,
    username   VARCHAR(100)
        UNIQUE      NOT NULL,
    first_name VARCHAR(100)
                    NOT NULL,
    last_name  VARCHAR(100)
                    NOT NULL,
    birthday   DATE NOT NULL,
    email      VARCHAR(255)
        UNIQUE      NOT NULL,
    password   VARCHAR(255)
                    NOT NULL,
    role       VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP WITH TIME ZONE
);

-- Indexes for faster lookup
CREATE INDEX idx_users_username ON users (username)
;
CREATE INDEX idx_users_email ON users (email)
;
