export const CHECK_FOR_EXISTENCE_AND_LOCK = `
-- After doing the existence check and locking we also add all the keys to the set

-- KEYS = list of seat keys
-- ARGV[1] = userId
-- ARGV[2] = TTL
-- ARGV[3] = userSeatSetKey (ex: USER_LOCKED_SEATS:user123)

local userId = ARGV[1]
local ttl = tonumber(ARGV[2])
local setKey = ARGV[3]

-- Step 1: Check locks
for _, key in ipairs(KEYS) do
    if redis.call("EXISTS", key) == 1 then
        return 0
    end
end

-- Step 2: Lock seats and add the key to the set
for _, key in ipairs(KEYS) do
    redis.call("SET", key, userId, "EX", ttl)
    redis.call("SADD", setKey, key)
end

redis.call('EXPIRE', setKey, ttl)

return 1
`;
