# This is a sample Python script.
import sys

file = open('test.txt', 'w')
file.write('test')
file.close()

def main():
    print("reached python main")
    print("Start Airport: " + sys.argv[1])
    print("Destination Airport: " + sys.argv[2])
    sys.stdout.flush()


if __name__ == '__main__':
    print("reached __name__")
    main()
