import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

from queue import PriorityQueue


# from pathlib import Path


class Vertex:
    def __init__(self, cases, code, state):
        self.cases = cases
        self.code = code
        self.state = state
        self.cost_from_start = float("inf")
        self.scratch = 0
        self.adjacent = []

    # def comparator(self, a, b):
    #     if a.cases == b.cases:
    #         return -1
    #     return a.cases - b.cases

    def __lt__(self, other):
        # if (self.cases == other.cases):
        #     return False
        return self.cases <= other.cases


def auth_firebase():
    print("authenticating firebase...")

    # data_folder = Path("")
    # TODO: make this into relative path
    cred = credentials.Certificate(
        "TEMP_INSERT_PATH_HERE")
    firebase_admin.initialize_app(cred)

    print("firebase authenticated.")

    return firestore.client()


def generate_vertices(firestore_db):
    airports_ref = firestore_db.collection(u'airports')
    airports = airports_ref.stream()

    vertices = {}

    for airport in airports:
        airports_dict = airport.to_dict()
        # TODO: implement cost
        vertices[airport.id] = Vertex(0, airport.id, airports_dict['state'])
        vertices[airport.id].adjacent = airports_dict['connections']

    # print(len(vertices))
    # print(vertices['AAE'].adjacent)
    # print (vertices)

    return vertices


class Graph:

    def clear_all(self):
        for vertex in self.vertices:
            vertex.cost_from_start = float("inf")
            vertex.scratch = 0


    def create_graph(self, start_vertex: Vertex):
        # dijkstra's algorithm
        self.clear_all()
        if (start_vertex is None):
            print("Invalid start vertex.")
            return None

        pq = PriorityQueue()
        pq.put(start_vertex)
        while pq.not_empty:
            curVertex = pq.get()




        print(start_vertex.state)

    def __init__(self, start):
        firestore_db = auth_firebase()
        self.vertices = generate_vertices(firestore_db)
      #  print(len(vertices))

        self.create_graph(self.vertices[start])


    # def main():
    #     firestore_db = auth_firebase()
    #     vertices = generate_vertices(firestore_db)
    #
    #     print(len(vertices))
