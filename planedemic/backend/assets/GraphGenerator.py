import sys
from Graph import Graph


def main():
    test = Graph(sys.argv[1])
    print(test.get_path(sys.argv[2]))


if __name__ == '__main__':
    main()
