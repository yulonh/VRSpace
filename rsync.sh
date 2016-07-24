user_pass='123321AAb'

echo "================================================================================================================"

echo "================================================================================================================"
echo "DEPLOY TO SERVER..."
/usr/bin/expect << EOF

   set timeout -1

   spawn rsync -cauvz -e "/usr/bin/ssh -lroot" --exclude "server/storage" ./dist/ yulonh.com:/root/www
   expect "password:" {send "$user_pass\n" }
   expect "sec]." {exit }

EOF%
