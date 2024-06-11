def convert_crt_to_byte_array(file_path):
    with open(file_path, 'rb') as file:
        byte_array = bytearray(file.read())
    return byte_array

# Example usage
crt_file_path = 'sample.crt'
byte_array = convert_crt_to_byte_array(crt_file_path)

# Print the byte array (optional)
print(byte_array)
