# ls2
a new light server with support for real time light updates

## installation

clone this guy in your /home/pi directory

next run 'sudo crontab -e' and throw this snippet in there: 
    
    @reboot sleep 120; sudo python3 /home/pi/lightStripServer/ls2/app.py
    
you can probably decrease the sleep amount, but my pi zero is super slow

## dependencies

    sudo pip3 install flask rpi-ws281x python-socketio
