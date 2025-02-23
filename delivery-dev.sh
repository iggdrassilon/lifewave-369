DIST_DIR_CLIENT="$PWD/dist"
REMOTE_USER="iggdrassil"
REMOTE_HOST="91.197.98.162"
REMOTE_DIR_CLIENT="Work/lifewave"
REMOTE_HOST_DIR='~/Work/www'
SECRET='~/.ssh/vps-0225'

echo "begin building of client..."
yarn build

if [ $? -ne 0 ]; then
    echo "client building failure"
    exit 1
fi

echo "make pm2 config..."

cp $PWD/ecosystem.config.js $DIST_DIR_CLIENT

if [ $? -ne 0 ]; then
    echo "copying failure"
    exit 1
fi

echo "Share repo to remote server"
eval sudo scp -r -i ~/.ssh/vps-0225 "$DIST_DIR_CLIENT"/* "$REMOTE_USER"@"$REMOTE_HOST":"$REMOTE_DIR_CLIENT"
ssh -i $SECRET "$REMOTE_USER"@"$REMOTE_HOST" "sudo -S cp -r $REMOTE_DIR_CLIENT $REMOTE_HOST_DIR"

if [ $? -ne 0 ]; then
    echo "Sharing failure..."
    exit 1
fi

echo "Sharing complete."