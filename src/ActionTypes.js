/**
 * API action types available for car listings
 */
export const LISTING_ACTION_TYPES = {
    CREATE: 'CREATE_LISTING',
    UPDATE: 'UPDATE_LISTING',
    DELETE: 'DELETE_LISTING',
    FETCH_ALL: 'FETCH_ALL_LISTINGS',
    FETCH: 'FETCH_LISTING',
    FILTER: 'FLITER_LISTINGS'
}

/**
 * API action types available for users
 */
export const USER_ACTION_TYPES = {
    CREATE: 'CREATE_USER',
    UPDATE: 'UPDATE_USER',
    DELETE: 'DELETE_USER',
    FETCH_ALL: 'FETCH_ALL_USERS',
    FETCH: 'FETCH_USER'
}

/**
 * API action types available for sesson mangement
 */
export const SESSION_ACTION_TYPES = {
    FETCH_AUTH_USER: 'FETCH_AUTH_USER'
}

/**
 * API action types available for direct messages
 */
export const DM_ACTION_TYPES = {
    CREATE: 'CREATE_DM',
    FETCH_ALL: 'FETCH_ALL_DMS',
}

