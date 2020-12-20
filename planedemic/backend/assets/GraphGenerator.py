import sys
from Graph import Graph


def main():
    test = Graph(sys.argv[1])
    ret = str(test.get_all_paths(sys.argv[2]))
    print(ret[1:len(ret) - 1])



if __name__ == '__main__':
    main()
