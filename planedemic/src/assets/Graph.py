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

    def create_graph(self, start_vertex: Vertex):
        # dijkstra's algorithm
        if (start_vertex is None):
            print("Invalid vertex")
            return

        print(start_vertex.state)

    def __init__(self, start):
        firestore_db = auth_firebase()
        vertices = generate_vertices(firestore_db)
        print(len(vertices))

        self.create_graph(vertices[start])

    # def main():
    #     firestore_db = auth_firebase()
    #     vertices = generate_vertices(firestore_db)
    #
    #     print(len(vertices))
