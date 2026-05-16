import hashlib
import json
import time
from datetime import datetime

class Block:
    def __init__(self, index, timestamp, data, previous_hash):
        self.index = index
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_string = json.dumps({
            "index": self.index,
            "timestamp": self.timestamp,
            "data": self.data,
            "previous_hash": self.previous_hash
        }, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()

class MineralBlockchain:
    def __init__(self):
        self.chain = [self.create_genesis_block()]

    def create_genesis_block(self):
        return Block(0, datetime.now().isoformat(), "Genesis Block - Mineral Tracking System Start", "0")

    def get_latest_block(self):
        return self.chain[-1]

    def add_batch(self, mine_name, mineral_type, quantity, origin_coords):
        data = {
            "batch_id": f"BTCH-{int(time.time())}",
            "mine": mine_name,
            "mineral": mineral_type,
            "quantity": quantity,
            "origin": origin_coords,
            "status": "Extracted",
            "certifications": ["ISO-14001", "ESG-Certified"]
        }
        new_block = Block(
            len(self.chain),
            datetime.now().isoformat(),
            data,
            self.get_latest_block().hash
        )
        self.chain.append(new_block)
        return data["batch_id"]

    def is_chain_valid(self):
        for i in range(1, len(self.chain)):
            current_block = self.chain[i]
            previous_block = self.chain[i-1]

            if current_block.hash != current_block.calculate_hash():
                return False
            if current_block.previous_hash != previous_block.hash:
                return False
        return True

    def display_chain(self):
        for block in self.chain:
            print(f"Index: {block.index}")
            print(f"Timestamp: {block.timestamp}")
            print(f"Data: {json.dumps(block.data, indent=2, ensure_ascii=False)}")
            print(f"Hash: {block.hash}")
            print(f"Prev Hash: {block.previous_hash}")
            print("-" * 50)

if __name__ == "__main__":
    print("Initializing Mineral Tracking Blockchain Prototype...")
    blockchain = MineralBlockchain()

    print("\nAdding Batch 1: Bor from Kirka...")
    blockchain.add_batch("Eskisehir-Kirka", "Bor", "500 Tons", "39.29, 30.52")
    
    time.sleep(1)
    
    print("Adding Batch 2: Gold from Usak...")
    blockchain.add_batch("Usak-Kisladag", "Gold", "12 kg", "38.48, 29.13")

    print("\n--- Blockchain Ledger ---")
    blockchain.display_chain()

    print(f"Is Blockchain Valid? {blockchain.is_chain_valid()}")
