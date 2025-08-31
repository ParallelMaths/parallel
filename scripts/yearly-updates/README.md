# How to do the yearly update

## Bump account levels 

### Step 1 (10 mins)

1) Run `npm run get-users`

This downloads the user data

2) Run `npm run get-results`

This downloads the results data

3) Save a backup of the generated files

4) Run `node scripts/yearly-updates/update-users-process.js`

This generates a new json file with their old and new data

### Step 2  (10 mins)

1) Run `update-users-upload.js`

This uploads the new data to the user accounts

### Step 3 (10 mins)

1) Backup and then delete your data files in `private`

2) Run `npm run get-users`

3) Update `update-users-check.js` to point at the backup made in Step 1.2

4) Run `update-users-check.js`

5) Check the values make sense

## Reset circles tag "started" timestamps (5 mins)

1) Run `updateCircleTagStartTimestamps.js`

2) Check `https://parallel.org.uk/circles/admin/tags` all the tags say "not started"

## Delete old users (2 hours)

1) Backup and then delete your data files in `private`

2) Run `npm run get-users`

3) Backup again to be safe

4) Update the cutoff date in `delete-old-users.js` to be 2 years ago

5) Run `delete-old-users.js`
